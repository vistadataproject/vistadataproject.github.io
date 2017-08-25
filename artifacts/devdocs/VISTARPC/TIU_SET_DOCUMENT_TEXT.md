---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU SET DOCUMENT TEXT<br/>
# TIU SET DOCUMENT TEXT

This RPC buffers the transmittal of text (i.e., the body of TIU Documents)from the Client to the Server. It allows documents of indefinite size tobe filed, without risk of an allocate error on the M Server.

## Properties

Property | Value
--- | ---
Label | SETTEXT
MUMPS Implementation | [TIUSRVPT](http://code.osehra.org/dox/Routine_TIUSRVPT_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the IEN of the TIU Document in the TIU DOCUMENT file (#8925).
TIUX | LIST |  | true | This is the array in which the body of the TIU Document is being passed,as:                  TIUX(&quot;HDR&quot;)&#x3D;&lt;# of Current Page&gt;^&lt;Total # of Pages&gt;                TIUX(&quot;TEXT&quot;,1,0)&#x3D;&lt;Line 1 of document body&gt;                TIUX(&quot;TEXT&quot;,2,0)&#x3D;&lt;Line 2 of document body&gt;                TIUX(&quot;TEXT&quot;,3,0)&#x3D;&lt;Line 3 of document body&gt;                        .                       .                        .                       .                        .                       .                TIUX(&quot;TEXT&quot;,i,0)&#x3D;&lt;Line i of document body&gt;
SUPPRESS | LITERAL |  | true | Optional parameter.  Default is 0 (no). Boolean flag that indicates whether to commit the data (as in the Save w/osignature action in CPRS), or to simply save it in the EDIT BUFFER for thedocument (as in the auto-save function).



## MUMPS Method Description

Property | Value
--- | ---
Method | [SETTEXT^TIUSRVPT](http://code.osehra.org/dox/Routine_TIUSRVPT_source.html)
Method Comment | Save Text - use Buffered I/O
Input Parameters | TIUDA, TIUX, SUPPRESS
Code | {::nomarkdown}<pre><code> N PAGES,PAGE S TIUY=0,SUPPRESS=$G(SUPPRESS,0)<br/> I $S(+$G(TIUDA)'>0:1,'$D(^TIU(8925,+TIUDA,0)):1,1:0) D  Q<br/> . S TIUY="0^0^0^Attempt to file data in a Nonexistent Entry."<br/> . D ERROR(TIUY)<br/> S PAGE=$P($G(TIUX("HDR")),U),PAGES=$P($G(TIUX("HDR")),U,2)<br/> I $S('PAGE:1,'PAGES:1,1:0) D  Q<br/> . S TIUY="0^0^0^Invalid text block header"<br/> . D ERROR(TIUY)<br/> I PAGE=1 K ^TIU(8925,+TIUDA,"TEMP")<br/> M ^TIU(8925,+TIUDA,"TEMP")=TIUX("TEXT")<br/> I 'SUPPRESS,(PAGE=PAGES),$D(^TIU(8925,TIUDA,"TEMP")) D<br/> . N TIUC,TIUI,TIU,TIUD12,TIUAU,TIUEC S (TIUC,TIUI)=0<br/> . F  S TIUI=$O(^TIU(8925,TIUDA,"TEMP",TIUI)) Q:+TIUI'>0  D<br/> . . S TIUC=TIUC+1<br/> . I TIUC>0 S ^TIU(8925,TIUDA,"TEMP",0)="^^"_TIUC_U_TIUC_U_DT_"^^"<br/> . D GETTIU^TIULD(.TIU,TIUDA)<br/> . K ^TIU(8925,TIUDA,"TEXT")<br/> . S TIUC=0 F  S TIUC=$O(^TIU(8925,"DAD",TIUDA,TIUC)) Q:+TIUC'>0  D<br/> . . I +$$ISADDNDM^TIULC1(+TIUC) Q<br/> . . K ^TIU(8925,+TIUC,"TEXT")<br/> . D MERGTEXT^TIUEDI1(+TIUDA,.TIU)<br/> . K ^TIU(8925,TIUDA,"TEMP")<br/> . ; If user is neither author or expected cosigner, file VBC Line count<br/> . S TIUD12=$G(^TIU(8925,TIUDA,12)),TIUAU=$P(TIUD12,U,2),TIUEC=$P(TIUD12,U,8)<br/> . I (TIUAU]""),(DUZ'=TIUAU) D<br/> . . I (TIUEC]""),(DUZ=TIUEC) Q<br/> . . D LINES(TIUDA)<br/> S TIUY=TIUDA_U_PAGE_U_PAGES</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}