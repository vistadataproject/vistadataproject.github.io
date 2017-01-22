---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX ORDITM 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX ORDITM{:/}
 tag | {::nomarkdown}ORDITM{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns an array of orderable items in the format:   Y(n)=IEN^.01 Name^.01 Name  -or-  IEN^Synonym <.01 Name>^.01 Name{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ORDITM^[ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 Method comment | Subset of orderable items
 Input parameters | {::nomarkdown}FROM, DIR, XREF, QOCALL{:/}
 First comment | {::nomarkdown}<pre> Y(n)=IEN^.01 Name^.01 Name  -or-  IEN^Synonym <.01 Name>^.01 Name</pre>{:/}
 Code | {::nomarkdown}  N I,IEN,CNT,X,DTXT,CURTM,DEFROUTE<br> S DEFROUTE=""<br> S QOCALL=+$G(QOCALL)<br> S I=0,CNT=44,CURTM=$$NOW^XLFDT<br> F  Q:I'<CNT  S FROM=$O(^ORD(101.43,XREF,FROM),DIR) Q:FROM=""  D<br> . S IEN="" F  S IEN=$O(^ORD(101.43,XREF,FROM,IEN),DIR) Q:'IEN  D<br> . . S X=^ORD(101.43,XREF,FROM,IEN)<br> . . I +$P(X,U,3),$P(X,U,3)<CURTM Q<br> . . I 'QOCALL,$P(X,U,5) Q<br> . . S I=I+1<br> . . I 'X S Y(I)=IEN_U_$P(X,U,2)_U_$P(X,U,2)<br> . . E  S Y(I)=IEN_U_$P(X,U,2)_$C(9)_"<"_$P(X,U,4)_">"_U_$P(X,U,4){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:02 am</p>{:/}