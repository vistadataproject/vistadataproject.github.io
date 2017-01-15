---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; GMV ADD VM 

 property | value 
--- | --- 
 name | GMV ADD VM
 domain | Vital
 description | {::nomarkdown}This remote procedure call is used to enter a new Vital/Measurement record<br/>in the GMRV Vital Measurement file (#120.5).<br/> <br/>This remote procedure call is documented in Integration Agreement 3996.{:/}
 VA RPC Documentation | [see 8994 and method descriptions](../vistaRPC documentation/GMV ADD VM)
 MUMPS implementation | [EN1^GMVDCSAV](http://code.osehra.org/dox/Routine_GMVDCSAV_source.html)
 type | CHANGE
 complexity | MEDIUM
 uses | 
 return type | SINGLE VALUE
 return description | 

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| GMRVDATA | LITERAL | true | {::nomarkdown}This variable contains the data needed to create a Vital/Measurement<br/>record in the GMRV Vital Measurement (#120.5) file. The values are parsed<br/>out of the GMRVDATA variable and filed.<br/> <br/>GMRVDATA has the following data:<br/> piece1^piece2^piece3^piece4^piece5<br/> <br/> where:<br/>  piece1 = date/time in FileMan internal format<br/>  piece2 = patient number from FILE 2 (i.e., DFN)<br/>  piece3 = vital type, a semi-colon, the reading, a semi-colon, and <br/>           oxygen flow rate and percentage values [optional] (e.g.,<br/>           21;99;1 l/min 90%)<br/>  piece4 = hospital location (FILE 44) pointer value<br/>  piece5 = user number from FILE 200 (i.e., DUZ), an asterisk, and the <br/>           qualifier (File 120.52) internal entry numbers separated by<br/>           colons (e.g., 547*50:65){:/} |  | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 1:00:01 am</p>{:/}