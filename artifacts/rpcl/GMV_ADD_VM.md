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
|  | [OBJECT] | [{name:vitalType,mvdmProperty:vitalType,parameterType:REFERENCE,description:Vital Type,referencedFile:120_51,pieceIndex:0,required:true,example:21},{name:value,mvdmProperty:value,parameterType:LITERAL,description:Vital value,pieceIndex:1,required:true,example:99},{name:supplementalO2,mvdmProperty:supplementalO2,parameterType:LITERAL,pieceIndex:2,description:Oxygen flow rate and percentage values,example:1 l/min 90%}] | {::nomarkdown}Vital type, a semi-colon, the reading, a semi-colon, and oxygen flow rate and percentage values [optional] (e.g.,21;99;1 l/min 90%){:/} |  | 21;99;1 l/min 90% | 
|  | REFERENCE |  | {::nomarkdown}Hospital Location{:/} | hospitalLocation | 4 | 
|  | [OBJECT] | [{name:enteredBy,mvdmProperty:enteredBy,parameterType:REFERENCE,description:Entered By,referencedFile:200,pieceIndex:0,required:true,example:55},{name:qualifier,mvdmProperty:qualifier,parameterType:[REFERENCE],pieceSeparationChar::,description:Vital qualifiers,referencedFile:120_52,pieceIndex:1}] | {::nomarkdown}User number from FILE 200 (i.e., DUZ), an asterisk, and the qualifier (File 120.52) internal entry numbers separated by colons (e.g., 547*50:65){:/} |  | 55*1:51 | 

{::nomarkdown} <br/><p style="font-size: 11px">Generated on January 20th 2017, 8:07:45 am</p>{:/}