---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWUX SYMTAB 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWUX SYMTAB{:/}
 tag | {::nomarkdown}SYMTAB{:/}
 routine | [ORWUX](http://code.osehra.org/dox/Routine_ORWUX_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns the contents of the current session's symbol table.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SYMTAB^[ORWUX](http://code.osehra.org/dox/Routine_ORWUX_source.html)
 Method comment | Return the current symbol table
 Code | {::nomarkdown}  N X K ^TMP($J,"SAV"),^TMP($J,"SND")<br> S X="^TMP($J,""SAV""," D DOLRO^%ZOSV<br> N N,I,L S X="^TMP($J,""SAV"")",L=0<br> S L=L+1,^TMP($J,"SND",L)="$I="_$I_"  $J="_$J_"  $S="_$S<br> S L=L+1,^TMP($J,"SND",L)=""  ;must send two lines per entry<br> F  S X=$Q(@X) Q:$QL(X)<3  Q:$QS(X,1)'=$J  Q:$QS(X,2)'="SAV"  D<br> . S N=$QS(X,3)<br> . I $QL(X)=3 D  Q<br> . . S L=L+1,^TMP($J,"SND",L)=N<br> . . S L=L+1,^TMP($J,"SND",L)=@X<br> . E  D<br> . . S N=N_"(" F I=4:1:$QL(X) S N=N_$QS(X,I)_","<br> . . S N=$E(N,1,$L(N)-1)_")"<br> . . S L=L+1,^TMP($J,"SND",L)=N<br> . . S L=L+1,^TMP($J,"SND",L)=@X<br> S REF=$NA(^TMP($J,"SND"))<br>{:/}


### CPRS

[rMisc.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMisc.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}