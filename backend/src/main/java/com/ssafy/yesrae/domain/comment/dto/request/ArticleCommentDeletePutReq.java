package com.ssafy.yesrae.domain.comment.dto.request;

import lombok.Data;

@Data
public class ArticleCommentDeletePutReq {

    private Long id;

    private Long userId;
}
