---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV ADD VM 

 property | value 
--- | --- 
 label | {::nomarkdown}GMV ADD VM{:/}
 tag | {::nomarkdown}EN1{:/}
 routine | [GMVDCSAV](http://code.osehra.org/dox/Routine_GMVDCSAV_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure call is used to enter a new Vital/Measurement recordin the GMRV Vital Measurement file (#120.5). This remote procedure call is documented in Integration Agreement 3996.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | GMV ADD VM [RPC entry point]
 Leading comment lines | {::nomarkdown}Saves vitals data<br/>GMVDATA has the following data:<br/>piece1^piece2^piece3^piece4^piece5<br/>where:<br/>piece1 = date/time in FileMan internal format<br/>piece2 = patient number from FILE 2 (i.e., DFN)<br/>piece3 = vital type, a semi-colon, the reading, a semi-colon, and<br/>oxygen flow rate and percentage values [optional] (e.g.,<br/>21;99;1 l/min 90%)<br/>piece4 = hospital location (FILE 44) pointer value<br/>piece5 = FILE 200 user number (i.e., DUZ), an asterisk, and the <br/>qualifier (File 120.52) internal entry numbers separated by<br/>colons (e.g., 547*50:65)<br/>Example:<br/>> S GMVDATA="3051011.1635^134^1;120/80;^67^87*2:38:50:75"<br/>> D EN1^GMVDCSAV(.RESULT,GMVDATA){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMRVDATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This variable contains the data needed to create a Vital/Measurementrecord in the GMRV Vital Measurement (#120.5) file. The values are parsedout of the GMRVDATA variable and filed. GMRVDATA has the following data: piece1^piece2^piece3^piece4^piece5  where:  piece1 = date/time in FileMan internal format  piece2 = patient number from FILE 2 (i.e., DFN)  piece3 = vital type, a semi-colon, the reading, a semi-colon, and            oxygen flow rate and percentage values [optional] (e.g.,           21;99;1 l/min 90%)  piece4 = hospital location (FILE 44) pointer value  piece5 = user number from FILE 200 (i.e., DUZ), an asterisk, and the            qualifier (File 120.52) internal entry numbers separated by           colons (e.g., 547*50:65){:/} | 




 Generated on January 13th 2017, 6:44:47 am