---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXQ DLGSAVE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXQ DLGSAVE{:/}
 tag | {::nomarkdown}DLGSAVE{:/}
 routine | [ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return IEN of new or existing quick order.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DLGSAVE^[ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
 Method comment | Return IEN of new or existing quick order
 Input parameters | {::nomarkdown}CRC<br>DNAME<br>DGRP<br>RSP{:/}
 Code | {::nomarkdown}  N ROOT,NM,IEN<br> S ROOT="ORWDQ "_CRC,VAL=0,IEN=+$O(^ORD(101.41,"B",ROOT,0))<br> I IEN=0 D SAVENEW(.VAL,ROOT,DNAME,DGRP,.RSP) I 1<br> E  I $$MATCH(IEN,DGRP,.RSP) S VAL=IEN I 1<br> E  D<br> . D UPDQNAME^ORCMEDT8(IEN)<br> . S ROOT=$$ENSURNEW^ORCMEDT8(ROOT)<br> . D SAVENEW(.VAL,ROOT,DNAME,DGRP,.RSP){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}