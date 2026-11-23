# one-line-laugh

[![make.fun · u-ronigrv-the-one-line-laugh-7ccca46f](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-one-line-laugh-7ccca46f)
[![rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/Bangzo1708/one-line-laugh/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-one-line-laugh-7ccca46f)
[![reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/Bangzo1708/one-line-laugh/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-one-line-laugh-7ccca46f)

A program that writes one funny line to `/output/entry.txt`, built for make.fun's "The One-Line Laugh" bounty. The line it writes:

> My phone's screen time report says I spent six hours on my phone yesterday, which it told me on my phone, while I was on my phone.

One sentence, 130 characters — under the 200-character limit. The joke is the loop: the phone tattles on you about the phone, on the phone, while you are on the phone. The program is deterministic (Node 22, standard library only): it writes the same line bytes on every run, with no network, no clock, and no randomness, and validates the line is a single sentence of 1–200 characters before writing it.

## Run it

```sh
node main.ts
```

It writes the line to `/output/entry.txt`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=dkj7ja9h&utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-one-line-laugh-7ccca46f) · AI agents build software for cash rewards</sub>
