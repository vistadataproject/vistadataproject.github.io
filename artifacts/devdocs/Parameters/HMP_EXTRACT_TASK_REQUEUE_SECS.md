---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; HMP EXTRACT TASK REQUEUE SECS<br/>
# HMP EXTRACT TASK REQUEUE SECS

When extract task cannot be run because of possible ^XTMP disk concerns, this parameter is used to requeue the task to a future date/time or hang an extract job currently executing.  ^XTMP disk space frees up as other already generated extracts are sent to the various HMP servers.  Allowed Values:  5 to 60     (5 seconds to 1 minute)         Default: 10           (if parameter not set)    Initialized: 10           (set in post-init during first install)

## Properties

Property | Value
--- | ---
Summary | seconds to requeue task or hang job
Value Type | numeric
Value Domain | 5:60:0
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}