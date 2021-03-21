import { useState, useCallback } from "react"

const storage: { [key: string]: any } =
  typeof localStorage !== "undefined" ? localStorage : {}

export function useAppState() {
  const [address, _setAddress] = useState<
    mapkit.SearchAutocompleteResult | undefined
  >(storage.databat_address ? JSON.parse(storage.databat_address) : undefined)

  const [logementType, _setLogementType] = useState<
    "maison" | "appartement" | undefined
  >(storage.databat_logementType)

  const [nbHabitant, _setNbHabitant] = useState<number | undefined>(
    storage.databat_nbHabitant
      ? parseInt(storage.databat_nbHabitant)
      : undefined
  )

  const setAddress = useCallback(
    (address: mapkit.SearchAutocompleteResult | undefined) => {
      _setAddress(address)
      if (address) {
        storage.databat_address = JSON.stringify(address)
      } else {
        delete storage.databat_address
      }
    },
    [_setAddress]
  )

  const setLogementType = useCallback(
    (logementType: "maison" | "appartement" | undefined) => {
      _setLogementType(logementType)
      if (logementType) {
        storage.databat_logementType = logementType
      } else {
        delete storage.databat_logementType
      }
    },
    [_setLogementType]
  )

  const setNbHabitant = useCallback(
    (nbHabitant: number | undefined) => {
      if (Number.isNaN(nbHabitant)) {
        nbHabitant = undefined
      }
      _setNbHabitant(nbHabitant)
      if (typeof nbHabitant !== "undefined") {
        storage.databat_nbHabitant = nbHabitant
      } else {
        delete storage.databat_nbHabitant
      }
    },
    [_setNbHabitant]
  )

  const mursState = useMursState()
  const plancherState = usePlancherState()

  return [
    [address, setAddress],
    [logementType, setLogementType],
    [nbHabitant, setNbHabitant],
    mursState,
    plancherState,
  ] as const
}

export function useMursState() {
  const [anneeConstruction, _setAnneeConstruction] = useState<
    number | undefined
  >(
    storage.databat_anneeConstruction
      ? parseInt(storage.databat_anneeConstruction)
      : undefined
  )

  const setAnneeConstruction = useCallback(
    (anneeConstruction: number | undefined) => {
      if (Number.isNaN(anneeConstruction)) {
        anneeConstruction = undefined
      }
      _setAnneeConstruction(anneeConstruction)
      if (typeof anneeConstruction !== "undefined") {
        storage.databat_anneeConstruction = anneeConstruction
      } else {
        delete storage.databat_anneeConstruction
      }
    },
    [_setAnneeConstruction]
  )

  return [[anneeConstruction, setAnneeConstruction]] as const
}

export function usePlancherState() {
  const [surface, _setSurface] = useState<number | undefined>(
    storage.databat_surface ? parseFloat(storage.databat_surface) : undefined
  )

  const setSurface = useCallback(
    (surface: number | undefined) => {
      if (Number.isNaN(surface)) {
        surface = undefined
      }
      _setSurface(surface)
      if (typeof surface !== "undefined") {
        storage.databat_surface = surface
      } else {
        delete storage.databat_surface
      }
    },
    [_setSurface]
  )

  return [[surface, setSurface]] as const
}
