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
| GMRVDATA | LITERAL ([UPDARRAY](#for-id-gmrvdata)) | true | {::nomarkdown}This variable contains the data needed to create a Vital/Measurement<br/>record in the GMRV Vital Measurement (#120.5) file. The values are parsed<br/>out of the GMRVDATA variable and filed.<br/> <br/>GMRVDATA has the following data:<br/> piece1^piece2^piece3^piece4^piece5<br/> <br/> where:<br/>  piece1 = date/time in FileMan internal format<br/>  piece2 = patient number from FILE 2 (i.e., DFN)<br/>  piece3 = vital type, a semi-colon, the reading, a semi-colon, and <br/>           oxygen flow rate and percentage values [optional] (e.g.,<br/>           21;99;1 l/min 90%)<br/>  piece4 = hospital location (FILE 44) pointer value<br/>  piece5 = user number from FILE 200 (i.e., DUZ), an asterisk, and the <br/>           qualifier (File 120.52) internal entry numbers separated by<br/>           colons (e.g., 547*50:65){:/} |  | 

#### UPDARRAY

| key | parameterType | range | description | mvdmProperty | example | 
| --- | --- | --- | --- | --- | --- | 
|  | DATE-TIME |  | {::nomarkdown}Date/Time Vitals Taken{:/} | vitalsTakenDateTime | 3160930.003322 | 
|  | REFERENCE |  | {::nomarkdown}Patient IEN{:/} | patient | 25 | 
|  | [OBJECT] | [Object Parameters 1](#object-parameters-1) | {::nomarkdown}Vital type, a semi-colon, the reading, a semi-colon, and oxygen flow rate and percentage values [optional] (e.g.,21;99;1 l/min 90%){:/} |  | 21;99;1 l/min 90% | 
|  | REFERENCE |  | {::nomarkdown}Hospital Location{:/} | hospitalLocation | 4 | 
|  | [OBJECT] | [Object Parameters 2](#object-parameters-2) | {::nomarkdown}User number from FILE 200 (i.e., DUZ), an asterisk, and the qualifier (File 120.52) internal entry numbers separated by colons (e.g., 547*50:65){:/} |  | 55*1:51 | 

#### <a name="object-parameters-1"></a>Object Parameters 1 

| name | mvdmProperty | parameterType | pieceIndex | description | example | 
| --- | --- | --- | --- | --- | --- | 
| vitalType | vitalType | REFERENCE | 0 | {::nomarkdown}Vital Type{:/} | 21 | 
| value | value | LITERAL | 1 | {::nomarkdown}Vital value{:/} | 99 | 
| supplementalO2 | supplementalO2 | LITERAL | 2 | {::nomarkdown}Oxygen flow rate and percentage values{:/} | 1 l/min 90% | 

#### <a name="object-parameters-2"></a>Object Parameters 2 

| name | mvdmProperty | parameterType | pieceIndex | description | example | 
| --- | --- | --- | --- | --- | --- | 
| enteredBy | enteredBy | REFERENCE | 0 | {::nomarkdown}Entered By{:/} | 55 | 
| qualifier | qualifier | [REFERENCE] | 1 | {::nomarkdown}Vital qualifiers{:/} |  | 

{::nomarkdown} <br/><p style="font-size: 11px">Generated on January 25th 2017, 1:00:20 am</p>{:/}