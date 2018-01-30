---
layout: default
title: VAM B1.1
---

## Build 1.1 (January 29th, 2017)

_VAM_ has four contractually mandated quarterly releases, scheduled from mid December 2017 through mid September 2018. This build, 1.1, is an interim release designed to add more meta (non patient) RPC emulation to the VICS Server. The remainder of the Build 2 period (February through mid March 2018) will focus on Patient RPC emulation that builds on the meta RPC emulation of builds 1 and 1.1.

Contents:

  * [VICS Server](https://github.com/vistadataproject/VICSServer), [RPC Router](https://github.com/vistadataproject/rpcRouter) - and [Data Extract and Sync](https://github.com/vistadataproject/DataExtractNSync) - Openly available, Git-based Software and Documentation Tagged v1.1
  * [RPCs Emulated](vamB1_1RPCsEmulated)
  * [Build 1.1 Highlights](demo/emulation1_1) - four functional areas addressed in build 1.1 
  * [Build 1.1 Demo](demo/) - upgrade to the _Coversheet Demo_ of Build 1

In addition, _Build 1.1_ has been packaged as a self contained Vagrant install. See [Vagrant Install Instructions](https://github.com/vistadataproject/VICSServer/wiki/Setup-Testing-Environment#installation) for how to install and run Build 1.1 in your own environment.

Known issues with Build 1.1:
  * Lexicon Search doesn't support spell check (VAM-484)
  * Term Frequency is not updated by Lexicon Search (VAM-483)
  * Generic letter combination ("CH") behaves different in VICS than in VISTA for _ORWDAL32 ALLERGY MATCH_ (VAM-486)
