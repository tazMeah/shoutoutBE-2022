import React, { useEffect, useState } from "react";
import ShoutoutList from "../components/ShoutoutList";

import ShoutOut from "../models/shoutoutInterface";

import { fetchAllShoutouts } from "../services/shoutoutAPIservice";

export default function AllShoutoutsRoute() {
    const [ shoutOuts, setShoutOuts ] = useState<ShoutOut[]>([]);
    useEffect(() => {
        fetchAllShoutouts().then(res => setShoutOuts(res))
    }, [])

    return (<div><ShoutoutList shoutouts={shoutOuts}/></div>)
}