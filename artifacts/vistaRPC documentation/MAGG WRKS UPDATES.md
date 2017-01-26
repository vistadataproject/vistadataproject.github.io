---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG WRKS UPDATES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGG WRKS UPDATES{:/}
 tag | {::nomarkdown}UPD{:/}
 routine | [MAGGTAU](http://code.osehra.org/dox/Routine_MAGGTAU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Using this remote procedure, the workstation updates its record in theIMAGING WINDOWS WORKSTATION file (#2006.81) and starts a new session.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Data that should be stored in the IMAGING WINDOWS WORKSTATION file(#2006.81):   ^01: Workstation name  ^02: Date/Time of the Capture application (external)  ^03: Date/Time of the Display application (external)  ^04: Location of the workstation  ^05: Date/Time of the MAGSETUP (external)  ^06: Version of the Display application (Major.Minor.Patch.Bild)  ^07: Version of the Capture application (Major.Minor.Patch.Bild)  ^08: Startup mode: 1 = Normal startup,       2 = Started by CPRS, 3 = Import API  ^09: OS Version  ^10: VistaRad version (Major.Minor.Patch.Bild)  ^11: RPCBroker server  ^12: RPCBroker port  ^13: Clinical Utilities version (Major.Minor.Patch.Bild)  ^14: TeleReader version (Major.Minor.Patch.Bild)  ^15: Date/Time of the Clinical Utilities (external)  ^16: Date/Time of the TeleReader (external)  ^17: Date/Time of the VistaRad (external){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}