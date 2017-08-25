---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG4 REMOTE IMPORT<br/>
# MAG4 REMOTE IMPORT

Called from MS Windows Application.

## Properties

Property | Value
--- | ---
Label | REMOTE
MUMPS Implementation | [MAGGSIUI](http://code.osehra.org/dox/Routine_MAGGSIUI_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGDATA | LIST |  | true | This is the array of data needed to Import the Image(s)Format is sequential array of &quot;Data Node^Data&quot;i.e.   MAGDATA(1)&#x3D;&quot;PXPKG^8925&quot;       MAGDATA(2)&#x3D;&quot;PXIEN^443&quot;       MAGDATA(3)&#x3D;&quot;IMAGE^\\SERVER\SHARE\FILENAME.EXT^Description&quot;



## MUMPS Method Description

Property | Value
--- | ---
Method | [REMOTE^MAGGSIUI](http://code.osehra.org/dox/Routine_MAGGSIUI_source.html)
Method Comment | RPC [MAG4 REMOTE IMPORT]
Input Parameters | MAGDATA
First Comment | {::nomarkdown}<pre><code> Import Images from a Windows App, by sending an array.</code></pre>{:/}
Code | {::nomarkdown}<pre><code> I ($D(MAGDATA)<10) S MAGRY(0)="0^Missing Data Array !." Q<br/> N I,J,ICT,DCT,MAGIX,IMAGES,ERR,X,Z<br/> S (ERR,ICT,DCT)=0<br/> S I="" F  S I=$O(MAGDATA(I)) Q:I=""  S X=MAGDATA(I) D  Q:ERR<br/> . S Z=$P(X,U)<br/> . I (X="")!(Z="") S MAGRY(0)="0^INVALID Data in Input Array: Node "_I_"="""_X_"",ERR=1 Q<br/> . I Z="IMAGE" S ICT=ICT+1,IMAGES(ICT)=$P(X,U,2,99) Q<br/> . S DCT=DCT+1,MAGIX(Z)=$P(X,U,2,99)<br/> I 'ERR D IMPORT(.MAGRY,.IMAGES,.MAGIX)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}