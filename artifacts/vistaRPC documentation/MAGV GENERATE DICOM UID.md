---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV GENERATE DICOM UID 

 property | value 
--- | --- 
 label | MAGV GENERATE DICOM UID
 tag | GENNWUID
 routine | [MAGVUID2](http://code.osehra.org/dox/Routine_MAGVUID2_source.html)
 return value type | SINGLE VALUE
 description | Per VHA Directive 2004-038, this RPC should not be modified.+---------------------------------------------------------------+| Property of the US Government.                                || No permission to copy or redistribute this software is given. || Use of unreleased versions of this software requires the user || to execute a written test agreement with the VistA Imaging    || Development Office of the Department of Veterans Affairs,     || telephone (301) 734-0100.                                     || The Food and Drug Administration classifies this software as  || a medical device.  As such, it may not be changed in any way. || Modifications to this software may result in an adulterated   || medical device under 21CFR820, the use of which is considered || to be a violation of US Federal Statutes.                     |+---------------------------------------------------------------+ This RPC generates a new DICOM UID that is not unique.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGPARAM | LIST |  | true | MAGPARAM(\ACCESSION NUMBER\)MAGPARAM(\SITE\)MAGPARAM(\INSTRUMENT\)MAGPARAM(\TYPE\) = \STUDY\ or \SERIES\ or \SOP\ | 




 ###### Generated on January 11th 2017, 6:39:43 am