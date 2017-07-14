---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU FIELD LIST<br/>
# TIU FIELD LIST

Returns long list array of template fields

## Properties

Property | Value
--- | ---
Label | LIST
Routine | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [LIST^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
Method Comment | Long list of Template Fields
Input Parameters | FROM, DIR
First Comment | {::nomarkdown}<pre><code> .Y=returned list, FROM=text to $O from, DIR=$O direction</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,DA,CNT,TIUD0,NODE<br/> S I=0,CNT=80,DIR=$G(DIR,1)<br/> F  Q:I'<CNT  S FROM=$O(^TIU(8927.1,"B",FROM),DIR) Q:FROM=""  D<br/> . S DA=0<br/> . F  Q:I'<CNT  S DA=$O(^TIU(8927.1,"B",FROM,DA)) Q:+DA'>0  D<br/> .. S I=I+1,Y(I)=DA_U_FROM<br/> .. S NODE=$G(^TIU(8927.1,DA,0))<br/> .. I +$P(NODE,U,3) S Y(I)=Y(I)_" <Inactive>"<br/> .. S Y(I)=Y(I)_U_$P(NODE,U,2)_U_$P(NODE,U,8)_U_$P(NODE,U,16)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}