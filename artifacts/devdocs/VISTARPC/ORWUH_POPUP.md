---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWUH POPUP<br/>
# ORWUH POPUP

Retrieves the "What's This" text for a given control.

## Properties

Property | Value
--- | ---
Label | POPUP
Routine | [ORWUH](http://code.osehra.org/dox/Routine_ORWUH_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [POPUP^ORWUH](http://code.osehra.org/dox/Routine_ORWUH_source.html)
Method Comment | Get instructions for a given control
Input Parameters | CTRL
First Comment | {::nomarkdown}<pre><code> ERROR</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N TMP,I,ILST<br/> D GETWP^XPAR(.TMP,"PKG","ORWUH WHATSTHIS",CTRL,.ERR)<br/> S ILST=1,LST(1)=$G(TMP)<br/> S I=0 F  S I=$O(TMP(I)) Q:'I  S ILST=ILST+1,LST(ILST)=TMP(I,0)<br/> I ERR ; Generate an error of some sort<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}