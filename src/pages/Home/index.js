import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, Modal } from "react-native";
import { AuthContext } from "../../contexts/auth";
import Header from "../../components/Header";
import { Background, ListBalance, Area, Title, List } from "./styles";
import api from "../../services/api";
import { format } from "date-fns";
import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../components/BalanceItem";
import HistoricoList from "../../components/HistoricoList";
import CalendarModal from "../../components/CalendarModal";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Home() {
  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState([]);
  const [movements, setMovements] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [dateMovements, setDateMovements] = useState(new Date());

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      try {
        const receives = await api.get("/receives");
        const balance = await api.get("/balance");

        if (isActive) {
          setMovements(receives.data);
          setListBalance(balance.data);
        }
      } catch (error) {
        console.error("Erro ao buscar dados da API", error);
      }
    }

    getMovements();

    return () => {
      isActive = false;
    };
  }, [isFocused, dateMovements]);

  async function handleDelete(id) {
    try {
      await api.delete("/receives/delete", {
        params: {
          item_id: id,
        },
      });

      setDateMovements(new Date());
    } catch (err) {
      console.log(err);
    }
  }

  function filterDateMovements(dateSelected) {
    setDateMovements(dateSelected);
  }

  return (
    <Background>
      <Header title="Minhas movimentações" />

      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.tag}
        renderItem={({ item }) => <BalanceItem data={item} />}
      />

      <Area>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="event" color="#fff" size={30} />
        </TouchableOpacity>
        <Title style={{ marginBottom: 20 }}>Ultimas movimentações</Title>
      </Area>

      <List
        data={movements}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HistoricoList data={item} deleteItem={handleDelete} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <CalendarModal
          setVisible={() => setModalVisible(false)}
          handleFilter={filterDateMovements}
        />
      </Modal>
    </Background>
  );
}
