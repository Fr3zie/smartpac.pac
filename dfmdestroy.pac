function FindProxyForURL(url, host) {
    if (host === "dfm.live" || host === "drfrost.com") {
        // Redirect to google.com
        return "PROXY google.com:80";
    }
    return "DIRECT";
}
