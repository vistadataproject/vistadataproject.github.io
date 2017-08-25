---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGG QUE PATIENT<br/>
# MAGG QUE PATIENT

This is called for a PREFETCH, the images queued this way have a   lower priority than other copy from JukeBox queues.Queues all images for a patient.  i.e. All images for a patient will becopied from the jukebox to the harddrive.

## Properties

Property | Value
--- | ---
Label | QUEPAT
MUMPS Implementation | [MAGGTU7](http://code.osehra.org/dox/Routine_MAGGTU7_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGDFN | LITERAL | 30 | true | This is the patients DFN.
CODE | LITERAL | 10 | true |         ; CODE is a string code for which images to Queue        ;     [&quot;A&quot; Abatract        ;     [&quot;F&quot; Full Resolution        ;     [&quot;B&quot; Big File



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}