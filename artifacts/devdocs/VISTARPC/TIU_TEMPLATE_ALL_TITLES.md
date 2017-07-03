---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU TEMPLATE ALL TITLES
# TIU TEMPLATE ALL TITLES

Returns a long list of all active titles.

Property | Value
--- | ---
Label | TITLELST
Routine | [TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FROM | LITERAL |  |  | 
DIR | LITERAL |  |  | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [TITLELST^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
Method Comment | Long list of titles
Input Parameters | FROM, DIR
First Comment | {::nomarkdown}<pre><code> .Y=returned list, FROM=text to $O from, DIR=$O direction,</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,DA,CNT,TIUD0<br/> S I=0,CNT=44,DIR=$G(DIR,1)<br/> F  Q:I'<CNT  S FROM=$O(^TIU(8925.1,"B",FROM),DIR) Q:FROM=""  D<br/> . S DA=0<br/> . F  Q:I'<CNT  S DA=$O(^TIU(8925.1,"B",FROM,DA)) Q:+DA'>0  D<br/> . . S TIUD0=$G(^TIU(8925.1,DA,0))<br/> . . I +$P(TIUD0,U,7)'=11 Q  ; Only allow Active Entries<br/> . . I $P(TIUD0,U,4)'="DOC" Q  ; Only allow TITLES<br/> . . S I=I+1,Y(I)=DA_"^"_FROM<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}