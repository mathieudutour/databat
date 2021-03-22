import { useState, useCallback } from "react"

const storage: { [key: string]: any } =
  typeof localStorage !== "undefined" ? localStorage : {}

function useBool(key: string) {
  const [bool, _setBool] = useState<boolean | undefined>(
    storage[key] ? storage[key] === "true" : undefined
  )

  const setBool = useCallback(
    (newBool?: boolean | string) => {
      if (typeof newBool === "string") {
        newBool = newBool === "true"
      }
      _setBool(newBool)
      if (typeof newBool === "undefined") {
        delete storage[key]
      } else if (newBool) {
        storage[key] = "true"
      } else {
        storage[key] = "false"
      }
    },
    [_setBool, key]
  )

  return [bool, setBool] as const
}

function useObject<T>(key: string) {
  const [obj, _setObj] = useState<T | undefined>(
    storage[key] ? JSON.parse(storage[key]) : undefined
  )

  const setObj = useCallback(
    (obj: T | undefined) => {
      _setObj(obj)
      if (obj) {
        storage[key] = JSON.stringify(obj)
      } else {
        delete storage[key]
      }
    },
    [_setObj, key]
  )

  return [obj, setObj] as const
}

function useString<T = string>(key: string) {
  const [obj, _setObj] = useState<T | undefined>(storage[key])

  const setObj = useCallback(
    (obj: T | undefined) => {
      _setObj(obj)
      if (obj) {
        storage[key] = obj
      } else {
        delete storage[key]
      }
    },
    [_setObj, key]
  )

  return [obj, setObj] as const
}

function useNumber(key: string) {
  const [obj, _setObj] = useState<number | undefined>(
    storage[key] ? parseFloat(storage[key]) : undefined
  )

  const setObj = useCallback(
    (obj: number | undefined) => {
      if (Number.isNaN(obj)) {
        obj = undefined
      }
      _setObj(obj)
      if (typeof obj !== "undefined") {
        storage[key] = obj
      } else {
        delete storage[key]
      }
    },
    [_setObj, key]
  )

  return [obj, setObj] as const
}

export function useAppState() {
  const [showOnboarding, setShowOnboarding] = useBool("databat_done_onboarding")

  const hideOnboarding = useCallback(() => {
    setShowOnboarding(false)
  }, [setShowOnboarding])

  return [
    [
      typeof showOnboarding === "undefined" ? true : showOnboarding,
      hideOnboarding,
    ],
    useObject<mapkit.SearchAutocompleteResult>("databat_address"),
    useString<"maison" | "appartement">("databat_logementType"),
    useNumber("databat_nbHabitant"),
    useToitureState(),
    useVentilationState(),
    useChauffageState(),
    useMursState(),
    usePlancherState(),
    useVitrageState(),
  ] as const
}

export function useToitureState() {
  return [
    useBool("databat_combles"),
    useBool("databat_roof_isolated"),
    useString<"0-10" | "10-30" | "30+">("databat_isolant_width_roof"),
    useBool("databat_state_isolant_roof"),
  ] as const
}

export function useVentilationState() {
  return [
    useBool("databat_ventilation"),
    useBool("databat_ventilation_work"),
    useBool("databat_ventilation_double"),
    useBool("databat_ventilation_entrees"),
  ] as const
}

export function useChauffageState() {
  return [
    useString<
      | "Electrique"
      | "Gaz"
      | "Fioul"
      | "Pompe à Chaleur"
      | "Solaire"
      | "Bois/Granulé"
    >("databat_chauffage_type"),
    useBool("databat_ecs_same_chauffage"),
    useString<
      | "Electrique"
      | "Gaz"
      | "Fioul"
      | "Pompe à Chaleur"
      | "Solaire"
      | "Bois/Granulé"
    >("databat_ecs_type"),
    useBool("databat_chauffage_condensation"),
    useBool("databat_ecs_condensation"),
    useBool("databat_chauffage_before_2000"),
    useBool("databat_ecs_before_2000"),
  ] as const
}

export function useMursState() {
  return [
    useString<
      | "Béton plein"
      | "Parpaing"
      | "Briques pleines"
      | "Briques creuses"
      | "Ossature bois"
      | "Pisé/Terre"
      | "Pierres"
    >("databat_materiaux_murs"),
    useBool("databat_murs_cold"),
    useBool("databat_murs_isolated"),
    useString<"exterieur" | "interieur">("databat_isolated_side_murs"),
    useString<"0-10" | "10-30" | "30+">("databat_isolant_width_murs"),
  ] as const
}

export function usePlancherState() {
  return [
    useNumber("databat_surface"),
    useBool("databat_plancher_isolated"),
    useString<"0-10" | "10-30" | "30+">("databat_isolant_width_plancher"),
    useBool("databat_plancher_vide_sanitaire"),
  ] as const
}

export function useVitrageState() {
  return [
    useBool("databat_good_vitrage"),
    useBool("databat_double_vitrage"),
    useBool("databat_tight_vitrage"),
  ] as const
}
