---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU GET LIST OF OBJECTS<br/>
# TIU GET LIST OF OBJECTS

This RPC returns the list of TIU OBJECTS that the current user may selectfrom.

## Properties

Property | Value
--- | ---
Label | OBJLST
MUMPS Implementation | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [OBJLST^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
Method Comment | Get the list of active objects
Code | {::nomarkdown}<pre><code> N TIUDA,TIUD0,TIUI<br/> S (TIUDA,TIUI)=0,TIUY=$NA(^TMP("TIU OBJECTS",$J)) K @TIUY<br/> F  S TIUDA=$O(^TIU(8925.1,"AT","O",TIUDA)) Q:+TIUDA'>0  D<br/> . S TIUD0=$G(^TIU(8925.1,TIUDA,0)) Q:'+$$CANPICK^TIULP(+TIUDA)<br/> . S TIUI=TIUI+1<br/> . S @TIUY@(TIUI)=TIUDA_U_$P(TIUD0,U,1,3)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}