---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV FIND STUDY BY UID 

 property | value 
--- | --- 
 label | MAGV FIND STUDY BY UID
 tag | FINDSTDY
 routine | [MAGVRS05](http://code.osehra.org/dox/Routine_MAGVRS05_source.html)
 return value type | SINGLE VALUE
 description | Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as thesecond argument to entry point FINDSTDY^MAGVRS05.  The first argumentto FINDSTDY^MAGVRS05 should be an array name (passed by reference)that will contain the returned value. The values that may be passed in are as follows.PAT_IEN: internal entry number of the patient record on the IMAGINGPATIENT REFERENCE File (#2005.6)PROC_IEN: internal entry number of the procedure on the IMAGING PROCEDURE File (#2005.61)STUDY_INSTANCE_UID: external identifier of the study

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| STUDYUID | LITERAL | 64 | true | This is the ISO object identifier of the study. | 




 Generated on January 11th 2017, 7:15:04 am