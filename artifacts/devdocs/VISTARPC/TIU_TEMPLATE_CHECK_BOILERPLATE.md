---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU TEMPLATE CHECK BOILERPLATE
# TIU TEMPLATE CHECK BOILERPLATE

This RPC will evaluate boilerplate passed in the input array, checking tosee whether any of the embedded objects are inactive, faulty, orambiguous.

Property | Value
--- | ---
Label | BPCHECK
Routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUX | LIST |  | true | This is a local array containg boilerplate text for the template in wordprocessing subscript format, e.g.: TIUX(2,1,0)&#x3D;&quot;The pt. is a |AGE| yo |RACE| |SEX| who presented to the&quot;TIUX(2,2,0)&#x3D;&quot;PULMONARY clinic on |VISIT DATE| for pulmonary function&quot;TIUX(2,3,0)&#x3D;&quot;tests to rule out Asthma/COPD.&quot;



### MUMPS Method Description

Property | Value
--- | ---
Method | [BPCHECK^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
Method Comment | Checks objects in boilerplate text.
Input Parameters | TIUX
Code | {::nomarkdown}<pre><code> N LINE,TIUI,TIUFWHO,TIUFPRIV,TIUY<br/> S TIUI=0,TIUY=1,TIUFPRIV=1,TIUFWHO="M"<br/> K ^TMP("TIUF",$J)<br/> F  S TIUI=$O(TIUX(2,TIUI)) Q:+TIUI'>0  D  Q:'+TIUY<br/> . S LINE=$G(TIUX(2,TIUI,0))<br/> . I LINE["/" D<br/> . . I ($L(LINE,"/")+1)#2 D  Q<br/> . . . S TIUY=0<br/> . . . S TIUTY(1)="Object split between lines, rest of line not checked:"<br/> . . . S TIUTY(2)=LINE<br/> . . N PIECE<br/> . . F PIECE=2:2:$L(LINE,"/") D  Q:TIUY=0<br/> . . . N OBJNM<br/> . . . S OBJNM=$P(LINE,"/",PIECE)<br/> . . . I OBJNM="" D  Q<br/> . . . . S TIUY=0<br/> . . . . S TIUTY(1)="Brackets are there, but there's no name inside //:"<br/> . . . . S TIUTY(2)=LINE<br/> . . . N XREF,ARR<br/> . . . F XREF="B","C","D" D  Q:'+TIUY<br/> . . . . N ODA S ODA=0<br/> . . . . F  S ODA=$O(^TIU(8925.1,XREF,OBJNM,ODA)) Q:+ODA'>0  D  Q:'+TIUY<br/> . . . . . S:$D(^TIU(8925.1,"AT","O",ODA)) ARR(ODA)=""<br/> . . . . . I $O(ARR($O(ARR(0)))) D<br/> . . . . . . S TIUY=0<br/> . . . . . . S TIUTY(1)="Object /"_OBJNM_"/ is ambiguous."<br/> . . . . . . S TIUTY(2)="It could be any of SEVERAL objects. Please contact IRM."<br/> . . . I '$D(ARR) D  Q<br/> . . . . S TIUY=0<br/> . . . . S TIUTY(1)="Object /"_OBJNM_"/ cannot be found in the file."<br/> . . . . S TIUTY(2)="Use UPPERCASE and object's exact NAME, PRINT NAME, or ABBREVIATION."<br/> . . . . S TIUTY(3)="Any of these may have changed since /"_OBJNM_"/ was embedded."<br/> . . . S ODA=$O(ARR(0)) N OBJCK D CHECK^TIUFLF3(ODA,0,0,.OBJCK)<br/> . . . I '+OBJCK D  Q:'+TIUY<br/> . . . . N SUBS<br/> . . . . F SUBS="F","T","O","S","J" D<br/> . . . . . I $D(OBJCK(SUBS)) D<br/> . . . . . . S TIUY=0<br/> . . . . . . S TIUTY(1)="Object /"_OBJNM_"/ is faulty: "<br/> . . . . . . S TIUTY(2)=OBJCK(SUBS)_"."<br/> . . . I $P(^TIU(8925.1,ODA,0),U,7)'=11 D<br/> . . . . S TIUY=0<br/> . . . . S TIUTY(1)="Object /"_OBJNM_"/ is NOT ACTIVE."<br/> K ^TMP("TIUF",$J)<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}