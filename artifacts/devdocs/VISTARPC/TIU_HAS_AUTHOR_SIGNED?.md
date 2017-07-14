---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU HAS AUTHOR SIGNED?<br/>
# TIU HAS AUTHOR SIGNED?

Boolean RPC returns a value of 0 if the author has not signed and the user attempting to sign is the expected co-signer.  Returns a 1 if the author has signed or the user attempting to sign is NOT the expected co-signer.

## Properties

Property | Value
--- | ---
Label | AUTHSIGN
Routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the TIU Document IEN.
TIUUSR | LITERAL |  | true | This is the DUZ of the user attempting to sign.



## MUMPS Method Description

Property | Value
--- | ---
Method | [AUTHSIGN^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Method Comment | Has Author signed?
Input Parameters | TIUDA, TIUUSR
First Comment | {::nomarkdown}<pre><code> if TIUY =<br/> 0 = Author has NOT signed & TIUUSR = Expected Cosigner<br/> 1 = Author HAS signed or TIUUSR '= Expected Cosigner<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N TIUD12,TIUD15<br/> S TIUD12=$G(^TIU(8925,TIUDA,12)),TIUD15=$G(^(15))<br/> S TIUY=1<br/> D:$P(TIUD12,U,8)=TIUUSR  Q<br/> . S:$P(TIUD12,U,2)'=$P(TIUD15,U,2) TIUY=0</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}