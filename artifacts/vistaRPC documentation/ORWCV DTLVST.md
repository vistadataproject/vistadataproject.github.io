---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCV DTLVST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWCV DTLVST{:/}
 tag | {::nomarkdown}DTLVST{:/}
 routine | [ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This API returns the text of a progress note or discharge summary relatedto a visit/appointment.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DTLVST^[ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
 Method comment | return progress notes / discharge summary
 Input parameters | {::nomarkdown}DFN, IEN, APPTINFO{:/}
 Code | {::nomarkdown}  N VISIT<br> I $P(APPTINFO,";")="A" D  Q<br> . S VISIT=$$APPT2VST^PXAPI(DFN,$P(APPTINFO,";",2),$P(APPTINFO,";",3))<br> . I VISIT=0 S VISIT=+$$GETENC^PXAPI(DFN,$P(APPTINFO,";",2),$P(APPTINFO,";",3))<br> . D DETNOTE^ORQQVS(.RPT,DFN,VISIT)<br> I $P(APPTINFO,";")="V" D  Q<br> . S VISIT=+$$GETENC^PXAPI(DFN,$P(APPTINFO,";",2),$P(APPTINFO,";",3))<br> . D DETNOTE^ORQQVS(.RPT,DFN,VISIT)<br> I $P(APPTINFO,";")="I" D  Q<br> . S VISIT=+$$GETENC^PXAPI(DFN,$P(APPTINFO,";",2),$P(APPTINFO,";",3))<br> . D DETSUM^ORQQVS(.RPT,DFN,VISIT)<br> . K ^TMP("PXKENC",$J)<br> I $P(APPTINFO,";")="R" D RCDTL^SDRROR{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:02 am</p>{:/}