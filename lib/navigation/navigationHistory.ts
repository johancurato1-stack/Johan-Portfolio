/*============================================================================
 //! NAVIGATION HISTORY
============================================================================*/

//============================================================================
//! TYPES
//============================================================================

export interface NavigationLocation {
  pathname: string;
  scrollY: number;
}

//============================================================================
//! STORAGE KEYS
//============================================================================

const HISTORY_KEY = "portfolio:navigation-history";
const PENDING_RESTORE_KEY = "portfolio:pending-restore";

//============================================================================
//! VALIDATION
//============================================================================

const isValidLocation = (location: unknown): location is NavigationLocation => {
  if (!location || typeof location !== "object") return false;

  const candidate = location as NavigationLocation;

  return (
    typeof candidate.pathname === "string" &&
    candidate.pathname.startsWith("/") &&
    !candidate.pathname.startsWith("//") &&
    Number.isFinite(candidate.scrollY) &&
    candidate.scrollY >= 0
  );
};

//============================================================================
//! GET NAVIGATION HISTORY
//============================================================================

const getNavigationHistory = (): NavigationLocation[] => {
  try {
    const savedHistory = sessionStorage.getItem(HISTORY_KEY);

    if (!savedHistory) return [];

    const history: unknown = JSON.parse(savedHistory);

    if (!Array.isArray(history)) return [];

    return history.filter(isValidLocation);
  } catch {
    return [];
  }
};

//============================================================================
//! SAVE CURRENT PAGE LOCATION
//============================================================================

export const saveCurrentLocation = (): void => {
  try {
    const history = getNavigationHistory();

    const currentLocation: NavigationLocation = {
      pathname:
        window.location.pathname +
        window.location.search +
        window.location.hash,
      scrollY: window.scrollY,
    };

    history.push(currentLocation);

    sessionStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch {
    // Navigation can continue if session storage is unavailable.
  }
};

//============================================================================
//! PREPARE PREVIOUS PAGE RESTORATION
//============================================================================

export const preparePreviousLocation = (): NavigationLocation | null => {
  try {
    const history = getNavigationHistory();

    if (history.length === 0) return null;

    const previousLocation = history.pop();

    if (!previousLocation) return null;

    sessionStorage.setItem(HISTORY_KEY, JSON.stringify(history));

    sessionStorage.setItem(
      PENDING_RESTORE_KEY,
      JSON.stringify(previousLocation),
    );

    return previousLocation;
  } catch {
    return null;
  }
};

//============================================================================
//! CONSUME PENDING SCROLL RESTORATION
//============================================================================

export const consumePendingRestoration = (
  currentPathname: string,
): number | null => {
  try {
    const savedLocation = sessionStorage.getItem(PENDING_RESTORE_KEY);

    if (!savedLocation) return null;

    const location: unknown = JSON.parse(savedLocation);

    if (!isValidLocation(location)) {
      sessionStorage.removeItem(PENDING_RESTORE_KEY);
      return null;
    }

    const destinationPathname = location.pathname.split(/[?#]/)[0];

    if (destinationPathname !== currentPathname) return null;

    sessionStorage.removeItem(PENDING_RESTORE_KEY);

    return location.scrollY;
  } catch {
    sessionStorage.removeItem(PENDING_RESTORE_KEY);
    return null;
  }
};

//============================================================================
//! CLEAR NAVIGATION HISTORY
//============================================================================

export const clearNavigationHistory = (): void => {
  try {
    sessionStorage.removeItem(HISTORY_KEY);
    sessionStorage.removeItem(PENDING_RESTORE_KEY);
  } catch {}
};
