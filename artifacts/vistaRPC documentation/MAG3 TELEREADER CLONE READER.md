---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG3 TELEREADER CLONE READER 

 property | value 
--- | --- 
 label | MAG3 TELEREADER CLONE READER
 tag | CLONE
 routine | [MAGNTLR4](http://code.osehra.org/dox/Routine_MAGNTLR4_source.html)
 return value type | ARRAY
 description | Per VHA Directive 2004-038, this RPC should not be modified.+---------------------------------------------------------------+| Property of the US Government.                                || No permission to copy or redistribute this software is given. || Use of unreleased versions of this software requires the user || to execute a written test agreement with the VistA Imaging    || Development Office of the Department of Veterans Affairs,     || telephone (301) 734-0100.                                     || The Food and Drug Administration classifies this software as  || a medical device.  As such, it may not be changed in any way. || Modifications to this software may result in an adulterated   || medical device under 21CFR820, the use of which is considered || to be a violation of US Federal Statutes.                     |+---------------------------------------------------------------+ Clone a Reader in TELEREADER READER file (#2006.5843)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGFROM | LITERAL |  | true | Source reader (a pointer to NEW PERSON file (#200)) to be cloned. | 
| MAGTO | LIST |  | true | An array with target readers (pointers to NEW PERSON file (#200)). | 




 ###### Generated on January 11th 2017, 6:39:43 am