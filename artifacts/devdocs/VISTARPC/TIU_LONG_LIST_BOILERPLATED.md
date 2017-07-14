---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU LONG LIST BOILERPLATED<br/>
# TIU LONG LIST BOILERPLATED

Used by the GUI to supply a long list of boilerplated titles.

## Properties

Property | Value
--- | ---
Label | LONGLIST
Routine | [TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FROM | LITERAL |  |  | This is the reference title from which the longlist is scrolling.
DIR | LITERAL |  |  | This is the direction in which the longlist is scrolling from thereference title.



## MUMPS Method Description

Property | Value
--- | ---
Method | [LONGLIST^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
Method Comment | Long list of titles with boilerplate
Input Parameters | FROM, DIR
First Comment | {::nomarkdown}<pre><code> .Y=returned list, FROM=text to $O from, DIR=$O direction,</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,DA,CNT,TIUD0<br/> S I=0,CNT=44,DIR=$G(DIR,1)<br/> F  Q:I'<CNT  S FROM=$O(^TIU(8925.1,"B",FROM),DIR) Q:FROM=""  D<br/> . S DA=0<br/> . F  Q:I'<CNT  S DA=$O(^TIU(8925.1,"B",FROM,DA)) Q:+DA'>0  D<br/> . . S TIUD0=$G(^TIU(8925.1,DA,0))<br/> . . I +$P(TIUD0,U,7)'=11 Q  ; Only allow Active Entries<br/> . . I $P(TIUD0,U,4)'="DOC" Q  ; Only allow TITLES<br/> . . ; Quit if no Boilerplate Text is present<br/> . . I '+$O(^TIU(8925.1,DA,"DFLT",0)) Q<br/> . . I $S(+$$CANENTR^TIULP(DA)'>0:1,+$$CANPICK^TIULP(DA)'>0:1,1:0) Q<br/> . . S I=I+1,Y(I)=DA_"^"_FROM</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}