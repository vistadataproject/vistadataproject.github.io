---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XDR UPD SUPPR EMAIL 

 property | value 
--- | --- 
 label | XDR UPD SUPPR EMAIL
 tag | EN
 routine | [XDRDEFLG](http://code.osehra.org/dox/Routine_XDRDEFLG_source.html)
 return value type | SINGLE VALUE
 description | Used to remotely set the field SUPPRESS NEW DUP EMAIL (#99) on theDUPLICATE RESOLUTION file (#15.1). SUPPRESS NEW DUP EMAIL is set to 1 (Yes) to suppress the email that isnormally sent when a new record is added to the DUPLICATE RECORD file byPSIM (i.e., by a call from routine XDRDADDS) If SUPPRESS NEW DUP EMAIL is set to 0 (No) or null, the email will be sent.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILE NUMBER | LITERAL | 20 | true | File number for the file that is the .01 field of a record in the DUPLICATE RESOLUTION file. This is the record that is to be updated by this RPC. | 
| VALUE | LITERAL | 1 | true | Must be set to 1 or 0. This value will be put into the SUPPRESS NEW DUP EMAIL field. | 




 Generated on January 11th 2017, 7:15:04 am