export class SmoothScroll {

    duration: number;
    delay: number;
    lastClick: number;

    constructor(duration: number) {
        this.duration = duration   //ms
        this.delay = duration + 1  //ms
        this.lastClick = 0
    }

    scrollTo = (destID: string) => {
        /* To prevent "bounce" */
        /* https://stackoverflow.com/a/28610565/3405291 */
        if (this.lastClick >= (Date.now() - this.delay)) {
            return;
        }

        this.lastClick = Date.now();
        const dest = document.getElementById(destID);

        if (!dest) {
            console.log(`${destID} not found!`)
            return;
        }

        const to = dest.offsetTop;
        if ((document.body.scrollTop || document.documentElement.scrollTop || 0) == to) {
            return;
        }

        const diff = to - (document.body.scrollTop || document.documentElement.scrollTop || 0);
        const scrollStep = Math.PI / (this.duration / 10);
        let count = 0;
        let currPos;
        console.log(scrollStep)
        const start = window.pageYOffset;
        const scrollInterval = setInterval(() => {
            if ((document.body.scrollTop || document.documentElement.scrollTop || 0) != to) {
                count++;
                currPos = start + diff * (.5 - .5 * Math.cos(count * scrollStep));
                /* https://stackoverflow.com/q/28633221/3405291 */
                /* To support both Chromium-based and Firefox */
                document.body.scrollTop = currPos;
                document.documentElement.scrollTop = currPos;
            } else {
                clearInterval(scrollInterval);
            }
        }, 10);
    }
}