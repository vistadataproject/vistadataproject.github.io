---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG WRKS UPDATES 

 property | value 
--- | --- 
 label | MAGG WRKS UPDATES
 tag | UPD
 routine | [MAGGTAU](http://code.osehra.org/dox/Routine_MAGGTAU_source.html)
 return value type | SINGLE VALUE
 description | Using this remote procedure, the workstation updates its record in theIMAGING WINDOWS WORKSTATION file (#2006.81) and starts a new session.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 245 | true | Data that should be stored in the IMAGING WINDOWS WORKSTATION file(#2006.81):   ^01: Workstation name  ^02: Date/Time of the Capture application (external)  ^03: Date/Time of the Display application (external)  ^04: Location of the workstation  ^05: Date/Time of the MAGSETUP (external)  ^06: Version of the Display application (Major.Minor.Patch.Bild)  ^07: Version of the Capture application (Major.Minor.Patch.Bild)  ^08: Startup mode: 1 = Normal startup,       2 = Started by CPRS, 3 = Import API  ^09: OS Version  ^10: VistaRad version (Major.Minor.Patch.Bild)  ^11: RPCBroker server  ^12: RPCBroker port  ^13: Clinical Utilities version (Major.Minor.Patch.Bild)  ^14: TeleReader version (Major.Minor.Patch.Bild)  ^15: Date/Time of the Clinical Utilities (external)  ^16: Date/Time of the TeleReader (external)  ^17: Date/Time of the VistaRad (external) | 




Generated on January 11th 2017, 6:34:23 am