---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQPX REMINDER DETAIL
# ORQQPX REMINDER DETAIL

Returns the details of a clinical reminder.

Property | Value
--- | ---
Label | REMDET
Routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true | Patient identifier from Patient file [#2].
CLINICAL REMINDER ID | LITERAL | 16 | true | Clinical reminder identifier (ien) from PCE REMINDER/MAINTENANCE ITEM file[#811.9].



### MUMPS Method Description

Property | Value
--- | ---
Method | [REMDET^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Method Comment | return detail for a pt&#x27;s clinical reminder
Input Parameters | ORPT, ORIEN
First Comment | {::nomarkdown}<pre><code> ORY - return array<br/> ORPT - patient DFN<br/> ORIEN - clinical reminder (811.9 ien)</code></pre>{:/}
Code | {::nomarkdown}<pre><code> K ^TMP("PXRHM",$J)<br/> D MAIN^PXRM(ORPT,ORIEN,5)     ; 5 returns all reminder info<br/> N CR,I,J,ORTXT S I=1<br/> S ORTXT="",ORTXT=$O(^TMP("PXRHM",$J,ORIEN,ORTXT)) Q:ORTXT=""  D<br/> .S J=0 F  S J=$O(^TMP("PXRHM",$J,ORIEN,ORTXT,"TXT",J)) Q:J=""  D<br/> ..S ORY(I)=^TMP("PXRHM",$J,ORIEN,ORTXT,"TXT",J),I=I+1<br/> K ^TMP("PXRHM",$J)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}