package com.joyfarm.email.repositories;

import com.joyfarm.email.entities.EmailHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

public interface EmailHistoryRepository extends JpaRepository<EmailHistory, Long>, QuerydslPredicateExecutor<EmailHistory> {

}
