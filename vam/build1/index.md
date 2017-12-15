---
layout: default
title: VAM B1
---

## Build 1 (December 15th, 2017)

>
> _VAM Build 1_ is the first of four quarterly VISTA Adaptive Maintenance (VAM) Project builds. It establishes the VICS Architecture. This architecture enables the incremental migration of VA provider workflow from 130 separate, legacy VISTA Servers to one set of VA-wide Veteran Integrated Care Services (VICS). The architecture addresses how to centralize relevant VISTA data while ensuring continued support for CPRS, the VA’s primary client for physicians.
>

![build1Demo -width70](demo/images/build1Demo.png)

>
> In addition to establishing basic routing and server infrastructure, Build 1 focused on the Meta or non patient data of VISTA and the RPCs that access that data (“Meta Data RPCs”). Specifically, it built out a generic Parameter Service to hold system configurations, a basic Time Service, a User Service for provider information, an Identifier Service for working between local VISTA identifiers and national equivalents and meta-data support for the four clinical services required in VAM - Allergy, Problem, Vital and Outpatient Pharmacy. Over half of the one hundred and forty Meta Data RPCs called for in VAM were then emulated over these services.
>

__Git-based Software and Documentation Tagged v1.0__:

  * Open Gits, one per runtime - [VICS Server](https://github.com/vistadataproject/VICSServer), [RPC Router](https://github.com/vistadataproject/rpcRouter) - and [Data Extract and Sync](https://github.com/vistadataproject/DataExtractNSync) - feature _"In-Code Markdown"_

  * Build 1 Reports and Specifications
    * [RPCs Emulated](vamB1RPCsEmulated)
    * [Service Documentation](devdocs/services/)
    * [Demo VISTA Dataset](vamB1DemoVISTADatasetContents)
    
__Tests (CI'ed):__ [Build 1 Tests](devdocs/tests/) including [performance numbers](devdocs/tests/performanceReport)

__Integrated Demonstration__: [demo build 1](demo/)

__Next Integration (B1.1)__: an intermediate mini-build scheduled for the end of January 2018 to complete VAM's Meta RPC Emulation and add Server demonstrability.

