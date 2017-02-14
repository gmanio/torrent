/**
 * Created on 2017-02-14.
 * @author: Gman Park
 */

var fs = require('fs');
var parseTorrent = require('parse-torrent');
var Client = require('bittorrent-tracker');

var torrentInfo = parseTorrent(fs.readFileSync(__dirname + '/sample/sample.torrent'));

var requiredOpts = {
    infoHash: torrentInfo.infoHash, // hex string or Buffer
    peerId: torrentInfo.infoHash, // hex string or Buffer
    announce: torrentInfo.announce, // list of tracker server urls
    port: 6881 // torrent client port, (in browser, optional)
}

var client = new Client(requiredOpts);

client.on('error', function (err) {
    // fatal client error!
    console.log(err.message)
})

client.on('warning', function (err) {
    // a tracker was unavailable or sent bad data to the client. you can probably ignore it
    console.log(err.message)
})

client.on('update', function (data) {
    console.log('got an announce response from tracker: ' + data.announce)
    console.log('number of seeders in the swarm: ' + data.complete)
    console.log('number of leechers in the swarm: ' + data.incomplete)
})

client.start();

// client.destroy();