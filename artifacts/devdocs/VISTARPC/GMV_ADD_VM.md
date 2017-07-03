---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; GMV ADD VM
# GMV ADD VM

This remote procedure call is used to enter a new Vital/Measurement recordin the GMRV Vital Measurement file (#120.5). This remote procedure call is documented in Integration Agreement 3996.

Property | Value
--- | ---
Label | EN1
Routine | [GMVDCSAV](http://code.osehra.org/dox/Routine_GMVDCSAV_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMRVDATA | LITERAL | 255 | true | This variable contains the data needed to create a Vital/Measurementrecord in the GMRV Vital Measurement (#120.5) file. The values are parsedout of the GMRVDATA variable and filed. GMRVDATA has the following data: piece1^piece2^piece3^piece4^piece5  where:  piece1 &#x3D; date/time in FileMan internal format  piece2 &#x3D; patient number from FILE 2 (i.e., DFN)  piece3 &#x3D; vital type, a semi-colon, the reading, a semi-colon, and            oxygen flow rate and percentage values [optional] (e.g.,           21;99;1 l/min 90%)  piece4 &#x3D; hospital location (FILE 44) pointer value  piece5 &#x3D; user number from FILE 200 (i.e., DUZ), an asterisk, and the            qualifier (File 120.52) internal entry numbers separated by           colons (e.g., 547*50:65)



### MUMPS Method Description

Property | Value
--- | ---
Method | [EN1^GMVDCSAV](http://code.osehra.org/dox/Routine_GMVDCSAV_source.html)
Method Comment | GMV ADD VM [RPC entry point]
Input Parameters | GMVDATA
First Comment | {::nomarkdown}<pre><code> Saves vitals data<br/> GMVDATA has the following data:<br/> piece1^piece2^piece3^piece4^piece5<br/> where:<br/>   piece1 = date/time in FileMan internal format<br/>   piece2 = patient number from FILE 2 (i.e., DFN)<br/>   piece3 = vital type, a semi-colon, the reading, a semi-colon, and<br/>            oxygen flow rate and percentage values [optional] (e.g.,<br/>            21;99;1 l/min 90%)<br/>   piece4 = hospital location (FILE 44) pointer value<br/>   piece5 = FILE 200 user number (i.e., DUZ), an asterisk, and the <br/>            qualifier (File 120.52) internal entry numbers separated by<br/>            colons (e.g., 547*50:65)<br/> Example:<br/>  > S GMVDATA="3051011.1635^134^1;120/80;^67^87*2:38:50:75"<br/>  > D EN1^GMVDCSAV(.RESULT,GMVDATA)<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N GMVCNT,GMVDFN,GMVDTDUN,GMVDTENT,GMVENTBY,GMVFDA,GMVHOSPL<br/> N GMVLOOP,GMVMSG,GMVQUALS,GMVRES,GMVIEN,GMVVMEAS,GMVVQUAL,GMVVTYP<br/> D QUALTWO</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
DLL File | {::nomarkdown}No Source Code Available (GMV_VitalsViewEnter.dll){:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}