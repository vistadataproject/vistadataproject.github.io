---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG GET TIMEOUT 

 property | value 
--- | --- 
 label | MAGG GET TIMEOUT
 tag | TIMEOUT
 routine | [MAGGTU6](http://code.osehra.org/dox/Routine_MAGGTU6_source.html)
 return value type | SINGLE VALUE
 description | Called by imaging application to get the Site defined timeout for the Imaging applications. Accepted input is \DISPLAY\, \CAPTURE\, \VISTARAD\, \TELEREADER\,or \IMPORTER\.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| APP | LITERAL | 255 | true | Either \DISPLAY\, \CAPTURE\, \VISTARAD\, \TELEREADER\,or \IMPORTER\. | 




Generated on January 11th 2017, 6:34:23 am