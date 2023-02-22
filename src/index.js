const express = require('express')
const app = express()

app.get('/', function (req, res) {
  let result = []
  result.push(`<br /><pre>
   █████  ███    ███  █████  ███████ ███████ ███████    ██  ██████      ██████   ██████   ██████ ██   ██ ███████     ██    ██  ██████  ██    ██
  ██   ██ ████  ████ ██   ██    ███  ██      ██         ██ ██    ██     ██   ██ ██    ██ ██      ██  ██  ██           ██  ██  ██    ██ ██    ██
  ███████ ██ ████ ██ ███████   ███   █████   █████      ██ ██    ██     ██████  ██    ██ ██      █████   ███████       ████   ██    ██ ██    ██
  ██   ██ ██  ██  ██ ██   ██  ███    ██      ██         ██ ██    ██     ██   ██ ██    ██ ██      ██  ██       ██        ██    ██    ██ ██    ██
  ██   ██ ██      ██ ██   ██ ███████ ███████ ███████ ██ ██  ██████      ██   ██  ██████   ██████ ██   ██ ███████        ██     ██████   ██████
Hello World
</pre><br />
  `)
  res.header('X-LAGOON' , process.env.HOSTNAME )
  res.send(result.join("<br />"))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
