---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGG WRKS UPDATES
# MAGG WRKS UPDATES

Using this remote procedure, the workstation updates its record in theIMAGING WINDOWS WORKSTATION file (#2006.81) and starts a new session.

Property | Value
--- | ---
Label | UPD
Routine | [MAGGTAU](http://code.osehra.org/dox/Routine_MAGGTAU_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 245 | true | Data that should be stored in the IMAGING WINDOWS WORKSTATION file(#2006.81):   ^01: Workstation name  ^02: Date/Time of the Capture application (external)  ^03: Date/Time of the Display application (external)  ^04: Location of the workstation  ^05: Date/Time of the MAGSETUP (external)  ^06: Version of the Display application (Major.Minor.Patch.Bild)  ^07: Version of the Capture application (Major.Minor.Patch.Bild)  ^08: Startup mode: 1 &#x3D; Normal startup,       2 &#x3D; Started by CPRS, 3 &#x3D; Import API  ^09: OS Version  ^10: VistaRad version (Major.Minor.Patch.Bild)  ^11: RPCBroker server  ^12: RPCBroker port  ^13: Clinical Utilities version (Major.Minor.Patch.Bild)  ^14: TeleReader version (Major.Minor.Patch.Bild)  ^15: Date/Time of the Clinical Utilities (external)  ^16: Date/Time of the TeleReader (external)  ^17: Date/Time of the VistaRad (external)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}