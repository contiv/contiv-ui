package main

import (
    "net/http"
    "github.com/gorilla/mux"
    "math/rand"
    "encoding/json"
    // "fmt"
    "time"
    "strconv"
)


// type Page struct {
//     Title string
//     Body  []byte
// }

// func (p *Page) save() error {
//  filename := p.Title + ".txt"
//  return ioutil.WriteFile(filename, p.Body, 0600)
// }

// func loadPage(title string) (*Page, error) {
//     filename := title + ".txt"
//     body, err := ioutil.ReadFile(filename)
//     if err != nil {
//         return nil, err
//     }
//     return &Page{Title: title, Body: body}, nil
// }

// func handler(w http.ResponseWriter, r *http.Request) {
//     fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
// }



// func viewHandler(w http.ResponseWriter, r *http.Request) {
//     title := r.URL.Path[len("/view/"):]
//     p, _ := loadPage(title)
//     fmt.Fprintf(w, "<h1>%s</h1><div>%s</div>", p.Title, p.Body)
// }

func main() {
    // listenURL := ":9090"
    router := mux.NewRouter()
    s := router.Methods("GET").Subrouter()
    s.HandleFunc("/visualization/data/graphdata", func(w http.ResponseWriter, r *http.Request) {
        data := getGraphData()
        w.Write(data)
    })
    s.HandleFunc("/visualization/data/children-struct", func(w http.ResponseWriter, r *http.Request) {
        data := getChildrenStruct()
        w.Write(data)
    })
    s.HandleFunc("/visualization/data/ancestors-struct", func(w http.ResponseWriter, r *http.Request) {
        data := getAncestorsStruct()
        w.Write(data)
    })
    s.HandleFunc("/visualization/timedata/{source}/{target}" , func(w http.ResponseWriter, r *http.Request) {
        vars := mux.Vars(r)
        source := vars["source"]
        target := vars["target"]
        data := getTimeDataDefault(source, target)
        w.Write(data)
    })
    s.HandleFunc("/visualization/timedata/{source}/{target}/{time:[0-9]+}", func(w http.ResponseWriter, r *http.Request) {
        vars := mux.Vars(r)
        source := vars["source"]
        target := vars["target"]
        time := vars["time"]
        data := getTimeData(source, target, time)
        w.Write(data)
    })

  // Add REST routes
    // http.HandleFunc("/", handler)
   // http.HandleFunc("/view/", viewHandler)
   //  http.HandleFunc("/edit/", editHandler)
   //  http.HandleFunc("/save/", saveHandler)
    http.Handle("/", router)
    http.ListenAndServe(":9000", nil)
}

type timeData struct {
    Data int
    Time string
}

func getTest() []byte {
    data := "{'greeting':'hello'}"
    return []byte(data)
}

func getTimeData(source string, target string, t string) []byte{
    s1 := rand.NewSource(time.Now().UnixNano())
    r1 := rand.New(s1)
    data := r1.Intn(100)
    dataPoint := &timeData{
            Data: data, 
            Time: t}
    res1B, _ := json.Marshal(dataPoint)
    // fmt.Println(string(res1B))
    return res1B
}

//return data for the past minute, recorded in 5 sec interval
func getTimeDataDefault(source string, target string) []byte {
    s2 := rand.NewSource(time.Now().UnixNano())
    r2 := rand.New(s2)
    var dataSet []*timeData
    for i := 0; i < 60; i++ {
        data := r2.Intn(100)
        // fmt.Println(data)
        dataPoint := &timeData{
            Data: data, 
            Time: strconv.Itoa(i*5)}
        // fmt.Println(dataPoint.time)
        dataSet = append(dataSet, dataPoint)
    }
    
    // res, _ := json.Marshal(&dataPoint)
    // fmt.Println(string(res))
    // return res
    // res1D := &Response1{
    //     Page:   1,
    //     Fruits: []string{"apple", "peach", "pear"}}
    res1B, _ := json.Marshal(dataSet)
    // fmt.Println(string(res1B))
    return res1B


}

func getGraphData() []byte {
    s2 := rand.NewSource(time.Now().UnixNano())
    r2 := rand.New(s2)
    r := r2.Intn(5)
    data := `{"nodes": [ { "name":"Web", "id": 0, "ancestors": null}, { "name":"Passenger App Container", "id": 1, "parent": "Passenger App", "ancestors":"Passenger App, Passenger" }, { "name":"Passenger App Container", "id": 2, "parent": "Passenger App", "ancestors":"Passenger App, Passenger" }, { "name":"Passenger Db Container", "id": 3, "parent": "Passenger Db", "ancestors":"Passenger Db, Passenger" }, { "name":"Driver App Container", "id": 4, "parent": "Driver App", "ancestors":"Driver App, Driver" }, { "name":"Driver Db Container", "id": 5, "parent": "Driver Db", "ancestors":"Driver Db, Driver" }, { "name":"Passenger App Container", "id": 6, "parent": "Passenger App", "ancestors":"Passenger App, Passenger" }, { "name":"Passenger Db Container", "id": 7, "parent": "Passenger Db", "ancestors":"Passenger Db, Passenger" }  ], "links": [ { "source": 0, "target": 1, "weight": 5 }, { "source": 1, "target": 0, "weight": 15 }, { "source": 0, "target": 2, "weight": 12}, { "source": 1, "target": 3, "weight": 24 }, { "source": 2, "target": 3, "weight": 3 }, { "source": 0, "target": 4, "weight": 62 }, { "source": 4, "target": 5, "weight": 14 } ] }`
    switch r {
        case 0:
            data = `{"nodes": [ { "name":"Web", "id": 0, "ancestors": null }, { "name":"Passenger App Container", "id": 1, "parent": "Passenger App", "ancestors":"Passenger App, Passenger" }, { "name":"Passenger App Container", "id": 2, "parent": "Passenger App", "ancestors":"Passenger App, Passenger" }, { "name":"Passenger Db Container", "id": 3, "parent": "Passenger Db", "ancestors":"Passenger Db, Passenger" }, { "name":"Driver App Container", "id": 4, "parent": "Driver App", "ancestors":"Driver App, Driver" }, { "name":"Driver Db Container", "id": 5, "parent": "Driver Db", "ancestors":"Driver Db, Driver" }, { "name":"Passenger App Container", "id": 6, "parent": "Passenger App", "ancestors":"Passenger App, Passenger" }, { "name":"Passenger Db Container", "id": 7, "parent": "Passenger Db", "ancestors":"Passenger Db, Passenger" }  ], "links": [ { "source": 0, "target": 6, "weight": 20}, { "source": 6, "target": 0, "weight": 18}, { "source": 6, "target": 7, "weight": 24}, { "source": 1, "target": 7, "weight": 13},{ "source": 0, "target": 1, "weight": 5 }, { "source": 1, "target": 0, "weight": 15 }, { "source": 0, "target": 2, "weight": 12}, { "source": 1, "target": 3, "weight": 24 }, { "source": 2, "target": 3, "weight": 3 }, { "source": 0, "target": 4, "weight": 62 }, { "source": 4, "target": 5, "weight": 14 } ] }`
        case 1:
            data = `{"nodes": [ { "name":"Web", "id": 0, "ancestors": null }, { "name":"Passenger App Container", "id": 1, "parent": "Passenger App", "ancestors":"Passenger App, Passenger" }, { "name":"Passenger App Container", "id": 2, "parent": "Passenger App", "ancestors":"Passenger App, Passenger" }, { "name":"Passenger Db Container", "id": 3, "parent": "Passenger Db", "ancestors":"Passenger Db, Passenger" }, { "name":"Driver App Container", "id": 4, "parent": "Driver App", "ancestors":"Driver App, Driver" }, { "name":"Driver Db Container", "id": 5, "parent": "Driver Db", "ancestors":"Driver Db, Driver" }, { "name":"Passenger App Container", "id": 6, "parent": "Passenger App", "ancestors":"Passenger App, Passenger" }, { "name":"Passenger Db Container", "id": 7, "parent": "Passenger Db", "ancestors":"Passenger Db, Passenger" }  ], "links": [ { "source": 0, "target": 6, "weight": 30}, { "source": 6, "target": 0, "weight": 42}, { "source": 6, "target": 7, "weight": 9}, { "source": 1, "target": 7, "weight": 7},{ "source": 0, "target": 1, "weight": 10 }, { "source": 1, "target": 0, "weight": 3}, { "source": 0, "target": 2, "weight": 28 }, { "source": 1, "target": 3, "weight": 10 }, { "source": 2, "target": 3, "weight": 31 }, { "source": 0, "target": 4, "weight": 27 }, { "source": 4, "target": 5, "weight": 12} ] }`
        case 2:
            data = `{"nodes": [ { "name":"Web", "id": 0, "ancestors": null }, { "name":"Passenger App Container", "id": 1, "parent": "Passenger App", "ancestors":"Passenger App, Passenger" }, { "name":"Passenger App Container", "id": 2, "parent": "Passenger App", "ancestors":"Passenger App, Passenger" }, { "name":"Passenger Db Container", "id": 3, "parent": "Passenger Db", "ancestors":"Passenger Db, Passenger" }, { "name":"Driver App Container", "id": 4, "parent": "Driver App", "ancestors":"Driver App, Driver" }, { "name":"Driver Db Container", "id": 5, "parent": "Driver Db", "ancestors":"Driver Db, Driver" }, { "name":"Passenger App Container", "id": 6, "parent": "Passenger App", "ancestors":"Passenger App, Passenger" }, { "name":"Passenger Db Container", "id": 7, "parent": "Passenger Db", "ancestors":"Passenger Db, Passenger" }  ], "links": [ { "source": 0, "target": 6, "weight": 35}, { "source": 6, "target": 0, "weight": 10}, { "source": 6, "target": 7, "weight": 32}, { "source": 1, "target": 7, "weight": 28},{ "source": 0, "target": 1, "weight": 20 }, { "source": 1, "target": 0, "weight": 9}, { "source": 0, "target": 2, "weight": 32}, { "source": 1, "target": 3, "weight": 2 }, { "source": 2, "target": 3, "weight": 42 }, { "source": 0, "target": 4, "weight": 16 }, { "source": 4, "target": 5, "weight": 16 } ] }`
        case 3:
            data = `{"nodes": [ { "name":"Web", "id": 0, "ancestors": null }, { "name":"Passenger App Container", "id": 1, "parent": "Passenger App", "ancestors":"Passenger App, Passenger" }, { "name":"Passenger App Container", "id": 2, "parent": "Passenger App", "ancestors":"Passenger App, Passenger" }, { "name":"Passenger Db Container", "id": 3, "parent": "Passenger Db", "ancestors":"Passenger Db, Passenger" }, { "name":"Driver App Container", "id": 4, "parent": "Driver App", "ancestors":"Driver App, Driver" }, { "name":"Driver Db Container", "id": 5, "parent": "Driver Db", "ancestors":"Driver Db, Driver" } , { "name":"Passenger App Container", "id": 6, "parent": "Passenger App", "ancestors":"Passenger App, Passenger" }, { "name":"Passenger Db Container", "id": 7, "parent": "Passenger Db", "ancestors":"Passenger Db, Passenger" } ], "links": [ { "source": 0, "target": 6, "weight": 70}, { "source": 6, "target": 0, "weight": 16}, { "source": 6, "target": 7, "weight": 64}, { "source": 1, "target": 7, "weight": 1},{ "source": 0, "target": 1, "weight": 2 }, { "source": 1, "target": 0, "weight": 60}, { "source": 0, "target": 2, "weight": 20}, { "source": 1, "target": 3, "weight": 28}, { "source": 2, "target": 3, "weight": 57 }, { "source": 0, "target": 4, "weight": 16 }, { "source": 4, "target": 5, "weight": 59 } ] }`
        case 4:
            data = `{"nodes": [ { "name":"Web", "id": 0, "ancestors": null }, { "name":"Passenger App Container", "id": 1, "parent": "Passenger App", "ancestors":"Passenger App, Passenger" }, { "name":"Passenger App Container", "id": 2, "parent": "Passenger App", "ancestors":"Passenger App, Passenger" }, { "name":"Passenger Db Container", "id": 3, "parent": "Passenger Db", "ancestors":"Passenger Db, Passenger" }, { "name":"Driver App Container", "id": 4, "parent": "Driver App", "ancestors":"Driver App, Driver" }, { "name":"Driver Db Container", "id": 5, "parent": "Driver Db", "ancestors":"Driver Db, Driver" }, { "name":"Passenger App Container", "id": 6, "parent": "Passenger App", "ancestors":"Passenger App, Passenger" }, { "name":"Passenger Db Container", "id": 7, "parent": "Passenger Db", "ancestors":"Passenger Db, Passenger" }  ], "links": [ { "source": 0, "target": 6, "weight": 10}, { "source": 6, "target": 0, "weight": 23}, { "source": 6, "target": 7, "weight": 24}, { "source": 1, "target": 7, "weight": 46},{ "source": 0, "target": 1, "weight": 40}, { "source": 1, "target": 0, "weight": 20}, { "source": 0, "target": 2, "weight": 1}, { "source": 1, "target": 3, "weight": 12}, { "source": 2, "target": 3, "weight": 5 }, { "source": 0, "target": 4, "weight": 22 }, { "source": 4, "target": 5, "weight": 100 } ] }`
        case 5:
            data = `{"nodes": [ { "name":"Web", "id": 0, "ancestors": null }, { "name":"Passenger App Container", "id": 1, "parent": "Passenger App", "ancestors":"Passenger App, Passenger" }, { "name":"Passenger App Container", "id": 2, "parent": "Passenger App", "ancestors":"Passenger App, Passenger" }, { "name":"Passenger Db Container", "id": 3, "parent": "Passenger Db", "ancestors":"Passenger Db, Passenger" }, { "name":"Driver App Container", "id": 4, "parent": "Driver App", "ancestors":"Driver App, Driver" }, { "name":"Driver Db Container", "id": 5, "parent": "Driver Db", "ancestors":"Driver Db, Driver" }, { "name":"Passenger App Container", "id": 6, "parent": "Passenger App", "ancestors":"Passenger App, Passenger" }, { "name":"Passenger Db Container", "id": 7, "parent": "Passenger Db", "ancestors":"Passenger Db, Passenger" }  ], "links": [ { "source": 0, "target": 6, "weight": 20}, { "source": 6, "target": 0, "weight": 27}, { "source": 6, "target": 7, "weight": 14}, { "source": 1, "target": 7, "weight": 3},{ "source": 0, "target": 1, "weight": 5 }, { "source": 1, "target": 0, "weight": 30}, { "source": 0, "target": 2, "weight": 19}, { "source": 1, "target": 3, "weight": 48}, { "source": 2, "target": 3, "weight": 39}, { "source": 0, "target": 4, "weight": 29 }, { "source": 4, "target": 5, "weight": 18 } ] }` 
    }
    return []byte(data)
}

func getChildrenStruct() []byte {
    data := `{"topLevel":["Web","Passenger","Driver"],"Passenger":["Passenger App","Passenger Db"],"Driver":["Driver App","Driver Db"],"Passenger App":[1,2,6],"Passenger Db":[3,7],"Driver App":[4],"Driver Db":[5]}`
    return []byte(data)
}

func getAncestorsStruct() []byte {
    data := `{"Passenger App Container":["Passenger App","Passenger"],"Passenger Db Container":["Passenger Db","Passenger"],"Driver App Container":["Driver App","Driver"],"Driver Db Container":["Driver Db","Driver"],"Passenger App":["Passenger"],"Passenger Db":["Passenger"],"Driver App":["Driver"],"Driver Db":["Driver"],"Passenger":[null],"Driver":[null],"Web":[null]}`
    return []byte(data)
}

