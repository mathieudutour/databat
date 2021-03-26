import { useState, useCallback, useEffect } from "react"
import debounce from "lodash.debounce"
import { ListGroup, Form } from "react-bootstrap"

const tokenID =
  "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlAzQThTV1JMUVcifQ.eyJpc3MiOiI4U0VQRlNDN1MzIiwiaWF0IjoxNjA4MDI5MTc5LCJleHAiOjE2Mzk1MjY0MDB9.OHHzObc13zDqp_2dwsY6iUqCXEY5MsMlcv_Zczz2hNftFN41CxyWqyo3Ufx2wE1KuTquo-Kwxpk4-JEjneHSOA"

export function AddressInput({
  onSelect,
}: {
  onSelect: (address: mapkit.SearchAutocompleteResult) => void
}) {
  const [address, setAddress] = useState("")
  const [suggestions, setSuggestions] = useState<
    mapkit.SearchAutocompleteResult[]
  >([])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchSuggestions = useCallback(
    debounce((address) => {
      const search = new mapkit.Search()
      search.autocomplete(address, (error, result) => {
        if (error) {
          console.error(error)
          return
        }

        setSuggestions(result.results)
      })
    }),
    [setSuggestions]
  )

  const onChangeAddress = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const address = event.target.value
      setAddress(address)

      if (!address) {
        setSuggestions([])
        return
      }

      fetchSuggestions(address)
    },
    [setSuggestions, setAddress, fetchSuggestions]
  )

  useEffect(() => {
    if (typeof mapkit === "undefined") {
      return
    }
    mapkit.init({
      authorizationCallback: function (done) {
        done(tokenID)
      },
    })
  }, [])

  return (
    <Form.Group>
      <Form.Control
        placeholder="Entrez votre adresse..."
        onChange={onChangeAddress}
        value={address}
      />
      <ListGroup>
        {suggestions.map((suggestion) => {
          return (
            <ListGroup.Item
              action
              key={suggestion.displayLines.join(",")}
              onClick={() => onSelect(suggestion)}
            >
              {suggestion.displayLines.join(", ")}
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </Form.Group>
  )
}
