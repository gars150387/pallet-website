import { DesignData } from "../components/DesignData"


    const renderedChoice = DesignData.filter((item) => {
        item.category === value && console.log( item.id )
    })
    console.log('testing', renderedChoice)