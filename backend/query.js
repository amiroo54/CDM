
/**
 * A query to download.
 */
class query
{
    /**
     * a list of all the links in the query.
     * @type {Array<downloadObject>}
     */
    links = [];
    /**
     * a list of all active downloads .
     * @type {Array<downloadObject>}
     */
    active = [];
    /**
     * a list of all pending downloads to be used with clearTimeout.
     * @type {Array}
     */
    pending = [];
    /**
     * a list of all finished downloads.
     * @type {Array<downloadObject>}
     */
    finished = [];
    /** 
     * name of the query.
     * @type {string} 
     */
    name = "";
    /**
     * date to which start the download automatically.
     * @type {Date}
     */
    startTime = new Date();
    /**
     * 
     * @param {string} name - Name of the query.
     * @param {Date} startTime - Date to which start the download automatically. if unidentified is passed will treat as a unset download list.
     */
    constructor(name, startTime) 
    {
        this.name = name;
        this.startTime = startTime;
    }
    /**
     * adds a link the query.
     * @param {downloadObject} link - object to download.
     */
    addLink(link) {
        if (typeof(link) == "string")
        {
            link = new URL(link);
        }
        this.links.push(link);
        link.query = this;
    }

    /**
     * returns the next downloadObject in the query, returns undefined if none is left.
     * @returns {downloadObject} next link in the query.
     */
    getNextLink() 
    {
        return this.links[this.finished.length + this.active.length];
    }
}

/**
 * a downloadObject with 
 */
class downloadObject 
{
    /**
     * final size of the downloaded file.
     * @type {number}
     */
    size = 0;
    /**
     * size of the already downloaded file.
     * @type {number}
     */
    downloadedSize = 0;
    /**
     * wheter downloading the file has ended or not.
     * @type {boolean}
     */
    ended = false
    /**
     * url to download.
     * @type {URL}
     */
    url = ""
    /**
     * path to download the file into.
     * @type {string}
     */
    path = ""
    /**
     * 
     * @param {URL | string} url - url to download, automatically converted to URL if a string is passed. 
     * @param {string} directory - directory to place the file, automatically adds the file name from the url.
     */
    constructor(url, directory)
    {
        if (typeof url === "string")
        {
            url = new URL(url);
        }
        this.url = url;
        this.path = directory + "/" + this.getFileName();
    }
    /**
     * gets the file name from the url.
     * @returns {string} name of the file
     */
    getFileName()
    {
        let splits = this.url.pathname.split("/");
        let final = decodeURIComponent(splits[splits.length - 1].split("?")[0]); // removing the ? at the end of the links.
        return final;
    }
}

module.exports = 
{
    downloadObject, query
}