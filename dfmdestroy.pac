function FindProxyForURL(url, host) {
    if (host === "dfm.live" || host === "drfrost.org") {
        // Redirect to google.com
        return "PROXY google.com:80";
    }
    return "DIRECT";
}
