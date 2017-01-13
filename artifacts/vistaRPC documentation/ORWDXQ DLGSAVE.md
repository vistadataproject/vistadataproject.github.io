---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXQ DLGSAVE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXQ DLGSAVE{:/}
 tag | {::nomarkdown}DLGSAVE{:/}
 routine | [ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return IEN of new or existing quick order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return IEN of new or existing quick order
 Input Parameters | {::nomarkdown}CRC<br/>DNAME<br/>DGRP<br/>RSP{:/}
 Lines | ```{::nomarkdown} N ROOT,NM,IEN<br/> S ROOT="ORWDQ "_CRC,VAL=0,IEN=+$O(^ORD(101.41,"B",ROOT,0))<br/> I IEN=0 D SAVENEW(.VAL,ROOT,DNAME,DGRP,.RSP) I 1<br/> E  I $$MATCH(IEN,DGRP,.RSP) S VAL=IEN I 1<br/> E  D<br/> . D UPDQNAME^ORCMEDT8(IEN)<br/> . S ROOT=$$ENSURNEW^ORCMEDT8(ROOT)<br/> . D SAVENEW(.VAL,ROOT,DNAME,DGRP,.RSP)```{:/}




 Generated on January 13th 2017, 7:11:26 am