---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWUX SYMTAB 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWUX SYMTAB{:/}
 tag | {::nomarkdown}SYMTAB{:/}
 routine | [ORWUX](http://code.osehra.org/dox/Routine_ORWUX_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns the contents of the current session's symbol table.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SYMTAB^[ORWUX](http://code.osehra.org/dox/Routine_ORWUX_source.html)
 Method comment | Return the current symbol table
 Code | ```  N X K ^TMP($J,"SAV"),^TMP($J,"SND")
 S X="^TMP($J,""SAV""," D DOLRO^%ZOSV
 N N,I,L S X="^TMP($J,""SAV"")",L=0
 S L=L+1,^TMP($J,"SND",L)="$I="_$I_"  $J="_$J_"  $S="_$S
 S L=L+1,^TMP($J,"SND",L)=""  ;must send two lines per entry
 F  S X=$Q(@X) Q:$QL(X)<3  Q:$QS(X,1)'=$J  Q:$QS(X,2)'="SAV"  D
 . S N=$QS(X,3)
 . I $QL(X)=3 D  Q
 . . S L=L+1,^TMP($J,"SND",L)=N
 . . S L=L+1,^TMP($J,"SND",L)=@X
 . E  D
 . . S N=N_"(" F I=4:1:$QL(X) S N=N_$QS(X,I)_","
 . . S N=$E(N,1,$L(N)-1)_")"
 . . S L=L+1,^TMP($J,"SND",L)=N
 . . S L=L+1,^TMP($J,"SND",L)=@X
 S REF=$NA(^TMP($J,"SND"))
```




 Generated on January 14th 2017, 7:26:35 am