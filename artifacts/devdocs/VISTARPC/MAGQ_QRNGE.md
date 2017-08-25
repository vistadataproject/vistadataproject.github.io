---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGQ QRNGE<br/>
# MAGQ QRNGE

This procedure is to either delete or re-queue a range of Vista ImagingBackground Processor queues.  The process parameter determines the action.

## Properties

Property | Value
--- | ---
Label | QRNGE
MUMPS Implementation | [MAGQBUT5](http://code.osehra.org/dox/Routine_MAGQBUT5_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
QUEUE | LITERAL | 15 | true | This determines the queue type that will be processed.
PROCESS | LITERAL | 15 | true | This determines whether the queue will be requeued or deleted.  Avalue of &quot;DEL&quot; will designate a delete and a value of &quot;REQ&quot; willdesignate a requeue.
START | LITERAL | 15 | true | This value will determine the start of the range of Queue file (#2006.03) entries that will be processed.
STOP | LITERAL | 15 | true | This will determine the last Queue file entry that will be processed.
PLACE | LITERAL | 15 | true | This value designates the Imaging site parameter entryfor which the queues to be processed are associated.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}