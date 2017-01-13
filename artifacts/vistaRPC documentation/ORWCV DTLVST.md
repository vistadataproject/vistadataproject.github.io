---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCV DTLVST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWCV DTLVST{:/}
 tag | {::nomarkdown}DTLVST{:/}
 routine | [ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This API returns the text of a progress note or discharge summary relatedto a visit/appointment.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return progress notes / discharge summary
 Input Parameters | {::nomarkdown}DFN<br/>IEN<br/>APPTINFO{:/}
 Lines | ```
 N VISIT
 I $P(APPTINFO,";")="A" D  Q
 . S VISIT=$$APPT2VST^PXAPI(DFN,$P(APPTINFO,";",2),$P(APPTINFO,";",3))
 . I VISIT=0 S VISIT=+$$GETENC^PXAPI(DFN,$P(APPTINFO,";",2),$P(APPTINFO,";",3))
 . D DETNOTE^ORQQVS(.RPT,DFN,VISIT)
 I $P(APPTINFO,";")="V" D  Q
 . S VISIT=+$$GETENC^PXAPI(DFN,$P(APPTINFO,";",2),$P(APPTINFO,";",3))
 . D DETNOTE^ORQQVS(.RPT,DFN,VISIT)
 I $P(APPTINFO,";")="I" D  Q
 . S VISIT=+$$GETENC^PXAPI(DFN,$P(APPTINFO,";",2),$P(APPTINFO,";",3))
 . D DETSUM^ORQQVS(.RPT,DFN,VISIT)
 . K ^TMP("PXKENC",$J)
 I $P(APPTINFO,";")="R" D RCDTL^SDRROR```




 Generated on January 13th 2017, 6:55:29 am