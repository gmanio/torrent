# Torrent Checker

시더(Seeder)와 리처(Leecher)를 아울러 이야기합니다. 즉 해당 토렌트파일을 사용 중인 모든 사람이 피어로서, 피어가 많다는 것은 스내치(Snatch) 수가 많은 것와 함께 해당 자료가 인기자료일 가능성을 보여주는 기준이 됩니다.
시더(Seeder)는 해당토렌트를 구성하는 파일의 전부를 가진 사람입니다. 이뮬 등에서 사용하는 표현을 빌리면 소위 완전체를 가진 사람입니다. 즉 시더가 1명이라도 있다면 속도와 관계없이 해당 토렌트에 대한 파일을 모두 받을 수 있습니다. (따라서 시더가 1명이라도 있다면, 가용성은 1 이상이 됩니다.)
리처(Leecher)는 흔히 해당 토렌트를 다운로드 하고 있는 사람이라고 설명됩니다.
하지만 정확한 리처의 의미는 해당 토렌트를 구성하는 파일의 일부를 가지고 있는 사람입니다. 따라서 현재 다운로드가 진행 중인 사람은 물론 여러 개의 파일로 된 토렌트 중 일부만 받은 사람(추가 다운로드 없음)도 리처입니다.

#[ View ] : 

for checking torrent health.

# vendor
[bittorrent-tracker](https://github.com/feross/bittorrent-tracker)
[parse-torrent](https://github.com/feross/parse-torrent)


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

* * *

The MIT License

Copyright (c) 2017 Gman Park

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
